using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Core.Entities
{
    public class Budget : BaseEntity
    {

        public string Name { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public long UserId { get; set; }
        public User User { get; set; }

        public ICollection<Expense> Expenses { get; set; } = new List<Expense>();


    }
}