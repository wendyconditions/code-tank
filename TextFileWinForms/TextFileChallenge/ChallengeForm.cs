using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TextFileChallenge
{
    public partial class ChallengeForm : Form
    {
        BindingList<UserModel> users = new BindingList<UserModel>();
        int counter;

        public ChallengeForm()
        {
            InitializeComponent();
            ReadFile();
            WireUpDropDown();
        }

        private void WireUpDropDown()
        {
            usersListBox.DataSource = users;
            usersListBox.DisplayMember = nameof(UserModel.DisplayText);
        }

        private void ReadFile()
        {
            string file = "C:/Users/wendym/Desktop/TextFileWPF/TextFileChallenge/StandardDataSet.csv";

            // reading file line by line
            using (StreamReader sr = new StreamReader(file))
            {
                string header = sr.ReadLine(); // not counting the header row
                string line;
                while ((line = sr.ReadLine()) != null)
                {
                    string[] arr = line.Split(',');
                    int num = 0;
                    Int32.TryParse(arr[2], out num);
                    bool alive = arr[3].Equals("1");

                    AddUserToList(arr[0], arr[1], num, alive);
                    counter++;
                }
                sr.Close();
            }
        }
        
        private void WriteFile(string firstname, string lastname, int age, bool isAlive)
        {
            string file = "C:/Users/wendym/Desktop/TextFileWPF/TextFileChallenge/StandardDataSet.csv";

            using (StreamWriter sw = File.AppendText(file))
            {
                int isChecked = isAlive ? 1 : 0;
                Convert.ToBoolean(isChecked);
                string item = $"{firstname},{lastname},{age},{isChecked}";
                sw.WriteLine(item);
            }
        }

        private void AddUserFromForm()
        {
            int isChecked = isAliveCheckbox.CheckState == CheckState.Checked ? 1 : 0;
            AddUserToList(firstNameText.Text, lastNameText.Text, Convert.ToInt32(agePicker.Value), Convert.ToBoolean(isChecked));
        }
        
        private void AddUserToList(string firstname, string lastname, int age, bool isAlive)
        {
            UserModel um = new UserModel
            {
                FirstName = firstname,
                LastName = lastname,
                Age = age,
                IsAlive = isAlive
            };
            users.Add(um);
        }

        private void ClearForm()
        {
            foreach(Control ctl in Controls)
            {
                if(ctl is CheckBox)
                {
                    ((CheckBox) ctl).Checked = false;
                }
                else if (ctl is TextBox)
                {
                    ((TextBox)ctl).Text = "";
                }
                else if (ctl is NumericUpDown)
                {
                    ((NumericUpDown)ctl).Value = 0;
                }
            }
        }

        // Handlers
        private void addUserButton_Click(object sender, EventArgs e)
        {
            AddUserFromForm();
            ClearForm();
        }

        private void saveListButton_Click(object sender, EventArgs e)
        {
            if(counter < users.Count)
            {
                for (int i = counter; i < users.Count; i++)
                {
                    WriteFile(users[i].FirstName, users[i].LastName, users[i].Age, users[i].IsAlive);
                    counter++;
                }
                MessageBox.Show("Succesfully saved.", "Ok");
            }
        }
    }
}
