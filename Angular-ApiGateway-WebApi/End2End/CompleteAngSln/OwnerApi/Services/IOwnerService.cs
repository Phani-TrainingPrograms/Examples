using OwnerApi.Models;

namespace OwnerApi.Services
{
    public interface IOwnerService
    {
        Task<Owner> AddOwner(Owner owner);

        Task<List<Owner>> GetAllOwners();

        Task<Owner> GetOwner(int id);

        Task<bool> DeleteOwner(int id);
    }
}
