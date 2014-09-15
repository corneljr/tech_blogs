class Api::PostsController < ApplicationController

	def index
		@posts = Post.all.group_by { |post| post.created_at.strftime("%B #{post.created_at.day.ordinalize}") }
		render json: @posts
	end

	def create
		@post = Post.create(note_params)
		render json: @post
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(note_params)
			render json: @post
		else
			render json: {success: false}
		end
	end

private
	
	def note_params
		params.require(:post).permit(:title, :url, :tagline)
	end

end
