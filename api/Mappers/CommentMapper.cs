using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentDto(this Comment comment)
        {
            return new CommentDto
            {
                Id = comment.Id,
                Content = comment.Content,
                Title = comment.Title,
                CreatedOn = comment.CreatedOn,
                StockId = comment.StockId
            };
        }


        public static Comment ToCommentFromCreate(this CreateCommentDto commentDto, int stockId)
        {
            return new Comment
            {
                Content = commentDto.Content,
                Title = commentDto.Title,
                StockId = stockId
            };
        }


        public static Comment ToCommentFromUpdate(this UpdateCommentRequest commentDto)
        {
            return new Comment
            {
                Content = commentDto.Content,
                Title = commentDto.Title
            };
        }
    }
}