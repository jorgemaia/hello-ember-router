using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HelloEmberRouter.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 2)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 2)]
        public string LastName { get; set; }
        [StringLength(30)]
        public string Alias { get; set; }
        [StringLength(120)]
        public string ImageUrl { get; set; }
        [StringLength(120)]
        public string Website { get; set; }
        [StringLength(30)]
        public string Twitter { get; set; }
        [StringLength(80)]
        public string Facebook { get; set; }
        public bool Deleted { get; set; }
    }
}