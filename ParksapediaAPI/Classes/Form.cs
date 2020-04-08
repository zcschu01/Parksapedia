using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParksapediaAPI.Classes
{
    public class Form
    {
        public string region { get; set; }
        public bool park_dog_friendly { get; set; }
        public string[] landscapes { get; set; }
        public string[] wildlife { get; set; }
        public string[] plants { get; set; }
        public bool lodging { get; set; }
        public bool campgrounds { get; set; }
    }
}