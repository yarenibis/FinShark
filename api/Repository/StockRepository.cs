using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Interfaces;
using Data;
using Microsoft.EntityFrameworkCore;
using Models;

namespace api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDbContext _context;
        public StockRepository(ApplicationDbContext dbContext)
        {
            _context = dbContext;
        }

        public async Task<Stock> CreateAsync(Stock stock)
        {
            await _context.Stocks.AddAsync(stock);
            await _context.SaveChangesAsync();
            return stock;
        }

        public async Task<Stock?> DeleteAsync(int id)
        {
            var stock_model = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);
            if (stock_model == null)
            {
                return null;
            }
            _context.Stocks.Remove(stock_model);
            await _context.SaveChangesAsync();
            return stock_model;
        }

        public async Task<List<Stock>> GetAllAsync()
        {
            return await _context.Stocks.ToListAsync();
        }

        public async Task<Stock?> GetByIdAsync(int id)
        {
            return await _context.Stocks.FindAsync(id);
        }

        public async Task<Stock?> UpdateAsync(int id, UpdateStockRequest updateStockRequest)
        {
            var stock_model = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);
            if (stock_model == null)
            {
                return null;
            }

            stock_model.Symbol = updateStockRequest.Symbol;
            stock_model.CompanyName = updateStockRequest.CompanyName;
            stock_model.Industry = updateStockRequest.Industry;
            stock_model.LastDiv = updateStockRequest.LastDiv;
            stock_model.MarketCap = updateStockRequest.MarketCap;
            stock_model.Purchase = updateStockRequest.Purchase;

            await _context.SaveChangesAsync();
            return stock_model;

        }
    }
}