<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Demo.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="/Resources/download.jpe" 
           onmouseover="this.src='/Resources/download.jpe'"onmouseout="this.src='/Resources/download(1).jpe'"/>
    </div>
    </form>
</body>
</html>
