using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(15, MinimumLength = 4, ErrorMessage = "You must enter at least 4 characters")]
        public string Password { get; set; }
    }
}