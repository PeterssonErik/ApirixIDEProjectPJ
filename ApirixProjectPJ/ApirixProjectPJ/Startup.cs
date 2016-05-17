using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ApirixProjectPJ.Startup))]
namespace ApirixProjectPJ
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
