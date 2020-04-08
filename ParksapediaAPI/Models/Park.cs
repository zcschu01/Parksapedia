﻿using System;
using System.Collections.Generic;

namespace ParksapediaAPI.Models
{
    public partial class Park
    {
        public string Park1 { get; set; }
        public string DogFriendly { get; set; }
        public string Lodging { get; set; }
        public string Camping { get; set; }

        public virtual Landscape Landscape { get; set; }
        public virtual Region Region { get; set; }
    }
}
