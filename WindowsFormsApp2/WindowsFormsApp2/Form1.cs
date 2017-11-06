using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Web;
using System.Data.SqlClient;
using System.Data.OleDb;


namespace WindowsFormsApp2
{
    public partial class Form1 : Form
    {
       protected void Page_Load(object sender, EventArgs e)
        {
            string CS = "data source=.SQLEXPRESS; database= EMPLOYEESTABLE; integrated security=SSPI";
            SqlConnection con = new SqlConnection(CS);
            SqlCommand cmd = new SqlCommand("Select * from EMPLOYEESTABLE", con);
            con.Open();
            DataGridView.DataGridViewControlCollection = cmd.ExecuteReader();
            DataGridView.DataGridViewControlCollection();
            con.Close();
        }
    }
}
