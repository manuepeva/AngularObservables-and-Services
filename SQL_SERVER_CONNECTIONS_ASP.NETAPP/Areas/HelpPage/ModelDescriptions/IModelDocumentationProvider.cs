using System;
using System.Reflection;

namespace SQL_SERVER_CONNECTIONS_ASP.NETAPP.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}