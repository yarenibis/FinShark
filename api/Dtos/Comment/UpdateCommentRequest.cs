using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class UpdateCommentRequest
    {
        [Required]
        [MaxLength(200, ErrorMessage = "message cannot be over 200 character")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(200, ErrorMessage = "message cannot be over 200 character")]
        public string Content { get; set; } = string.Empty;
    }
}