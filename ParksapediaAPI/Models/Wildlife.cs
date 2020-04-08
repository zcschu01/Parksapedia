using System;
using System.Collections.Generic;

namespace ParksapediaAPI.Models
{
    public partial class Wildlife
    {
        public string ParkName { get; set; }
        public string Animal { get; set; }
        public string Tag { get; set; }

        public virtual Park ParkNameNavigation { get; set; }
    }
}
