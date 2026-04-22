using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Core.Entities
{
    public class BaseEntity
    {
        public long Id { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now();
        public DateTime UpdatedAt { get; set; } = DateTime.Now();

    }
}