using Microsoft.EntityFrameworkCore;
using OwnerApi.Models;

namespace OwnerApi.Services
{
    public class OwnerService : IOwnerService
    {
        private readonly CapgeminiDbContext _context; 
        public OwnerService(CapgeminiDbContext context)
        {
            _context = context;
        }

        public async Task<Owner> AddOwner(Owner owner)
        {
            if(owner == null) throw new Exception("Owner details are not set");
            _context.Owners.Add(owner);
            await _context.SaveChangesAsync();
            return _context.Owners.FirstOrDefault(r => r.OwnerId == owner.OwnerId);
        }

        public async Task<bool> DeleteOwner(int id)
        {
            var rec = await _context.Owners.FirstOrDefaultAsync(r =>r.OwnerId == id);
            if(rec == null)
                return false;
            else
            {
                _context.Owners.Remove(rec);
                _context.SaveChanges();
                return true;
            }
        }

        public async Task<List<Owner>> GetAllOwners()
        {
            return await _context.Owners.ToListAsync();
        }

        public async Task<Owner> GetOwner(int id)
        {
            return await _context.Owners.FirstOrDefaultAsync(r => r.OwnerId == id);
        }
    }
}
