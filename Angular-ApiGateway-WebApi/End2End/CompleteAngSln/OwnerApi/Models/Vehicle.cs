using System;
using System.Collections.Generic;

namespace OwnerApi.Models;

public partial class Vehicle
{
    public int VehicleId { get; set; }

    public int? OwnerId { get; set; }

    public string? Brand { get; set; }

    public string? Model { get; set; }

    public string? RegNo { get; set; }

    public virtual Owner? Owner { get; set; }
}
