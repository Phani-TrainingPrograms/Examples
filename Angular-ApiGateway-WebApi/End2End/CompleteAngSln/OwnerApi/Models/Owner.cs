using System;
using System.Collections.Generic;

namespace OwnerApi.Models;

public partial class Owner
{
    public int OwnerId { get; set; }

    public string OwnerName { get; set; } = null!;

    public long OwnerPhone { get; set; }

    public string OwnerEmail { get; set; } = null!;

    public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
}
