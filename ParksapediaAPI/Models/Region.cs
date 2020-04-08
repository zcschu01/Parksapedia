using System;
using System.Collections.Generic;

namespace ParksapediaAPI.Models
{
    public partial class Region
    {
        public string ParkName { get; set; }
        public string Region1 { get; set; }

        public virtual Park ParkNameNavigation { get; set; }
    }
}
