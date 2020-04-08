using System;
using System.Collections.Generic;

namespace ParksapediaAPI.Models
{
    public partial class Landscape
    {
        public string ParkName { get; set; }
        public string Landscape1 { get; set; }

        public virtual Park ParkNameNavigation { get; set; }
    }
}
