Imports System.Reflection
Imports MySql.Data.MySqlClient



Class MainWindow
    Dim cn As MySqlConnection

    Private Sub Button_Click(sender As Object, e As RoutedEventArgs)
        cn.ConnectionString = "server=localhost; userid=root; password=gatito=00; database=people;"
        cn.Open()
        MsgBox("You now connected!")
    End Sub
End Class
