using System;
using System.Collections.Generic;

namespace ParksapediaAPI.Models
{
    public partial class Plant
    {
        public string ParkName { get; set; }
        public string Plant1 { get; set; }
        public string Tag { get; set; }

        public virtual Park ParkNameNavigation { get; set; }
    }
}
