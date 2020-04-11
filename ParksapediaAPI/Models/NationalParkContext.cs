using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ParksapediaAPI.Models
{
    public partial class NationalParkContext : DbContext
    {
        public NationalParkContext()
        {
        }

        public NationalParkContext(DbContextOptions<NationalParkContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Landscape> Landscape { get; set; }
        public virtual DbSet<Park> Park { get; set; }
        public virtual DbSet<Plant> Plant { get; set; }
        public virtual DbSet<Region> Region { get; set; }
        public virtual DbSet<Wildlife> Wildlife { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=softwareeng.database.windows.net;Database=NationalPark; User Id=software; Password =Louisville20;Trusted_Connection=False;Encrypt=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Landscape>(entity =>
            {
                entity.HasNoKey();

                entity.HasIndex(e => new { e.ParkName, e.Landscape1 })
                    .HasName("UQ__Landscap__8E1CA2F9B3CB2E91")
                    .IsUnique();

                entity.Property(e => e.Landscape1)
                    .HasColumnName("landscape")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ParkName)
                    .IsRequired()
                    .HasColumnName("park_name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.ParkNameNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.ParkName)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Landscape__park___4F7CD00D");
            });

            modelBuilder.Entity<Park>(entity =>
            {
                entity.HasKey(e => e.Park1)
                    .HasName("PK__Park__8320BCE5F3DEF8F3");

                entity.Property(e => e.Park1)
                    .HasColumnName("park")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Camping)
                    .HasColumnName("camping")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DogFriendly)
                    .HasColumnName("dog_friendly")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Lodging)
                    .HasColumnName("lodging")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Link)
                 .HasColumnName("link")
                    .HasMaxLength(255)
                    .IsUnicode(false);

            });

            modelBuilder.Entity<Plant>(entity =>
            {
                entity.HasNoKey();

                entity.HasIndex(e => new { e.ParkName, e.Plant1 })
                    .HasName("UQ__Plant__B6A71269367F239B")
                    .IsUnique();

                entity.Property(e => e.ParkName)
                    .HasColumnName("park_name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Plant1)
                    .HasColumnName("plant")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Tag)
                    .HasColumnName("tag")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.ParkNameNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.ParkName)
                    .HasConstraintName("FK__Plant__park_name__5535A963");
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.HasKey(e => e.ParkName)
                    .HasName("PK__Region__D66747AED37E35F0");

                entity.Property(e => e.ParkName)
                    .HasColumnName("park_name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Region1)
                    .HasColumnName("region")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.ParkNameNavigation)
                    .WithOne(p => p.Region)
                    .HasForeignKey<Region>(d => d.ParkName)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Region__park_nam__4BAC3F29");
            });

            modelBuilder.Entity<Wildlife>(entity =>
            {
                entity.HasNoKey();

                entity.HasIndex(e => new { e.ParkName, e.Animal })
                    .HasName("UQ__Wildlife__3FAB50250C1FC749")
                    .IsUnique();

                entity.Property(e => e.Animal)
                    .HasColumnName("animal")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ParkName)
                    .HasColumnName("park_name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Tag)
                    .HasColumnName("tag")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.ParkNameNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.ParkName)
                    .HasConstraintName("FK__Wildlife__park_n__52593CB8");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
