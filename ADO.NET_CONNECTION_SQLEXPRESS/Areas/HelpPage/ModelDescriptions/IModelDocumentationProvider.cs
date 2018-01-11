using System;
using System.Reflection;

namespace ADO.NET_CONNECTION_SQLEXPRESS.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}