using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OwnerApi.Models;

public partial class CapgeminiDbContext : DbContext
{
    public CapgeminiDbContext()
    {
    }

    public CapgeminiDbContext(DbContextOptions<CapgeminiDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Owner> Owners { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Owner>(entity =>
        {
            entity.HasKey(e => e.OwnerId).HasName("PK__Owner__819385B8CAD2FA5E");

            entity.ToTable("Owner");

            entity.Property(e => e.OwnerId).ValueGeneratedNever();
            entity.Property(e => e.OwnerEmail).HasMaxLength(100);
            entity.Property(e => e.OwnerName).HasMaxLength(50);
        });

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasKey(e => e.VehicleId).HasName("PK__Vehicle__476B549285FA1ECE");

            entity.ToTable("Vehicle");

            entity.HasIndex(e => e.RegNo, "UQ__Vehicle__2C6FF1E9182E4C08").IsUnique();

            entity.Property(e => e.VehicleId).ValueGeneratedNever();
            entity.Property(e => e.Brand).HasMaxLength(50);
            entity.Property(e => e.Model).HasMaxLength(50);
            entity.Property(e => e.RegNo).HasMaxLength(20);

            entity.HasOne(d => d.Owner).WithMany(p => p.Vehicles)
                .HasForeignKey(d => d.OwnerId)
                .HasConstraintName("FK__Vehicle__OwnerId__65370702");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
