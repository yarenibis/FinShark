using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Stock
{
    public class UpdateStockRequest
    {
        [Required]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [Range(0.001, 100)]
        public decimal Purchase { get; set; }
        [Required]
        [Range(0.001, 100)]

        public decimal LastDiv { get; set; }
        [Required]
        public string Industry { get; set; } = string.Empty;
        [Required]
        public long MarketCap { get; set; }
    }
}