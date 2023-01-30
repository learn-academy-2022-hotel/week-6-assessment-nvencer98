# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) where it is located 
class BlogPostsController < ApplicationController
  def index
    # ---2) all the stuff in blogpost
    @posts = BlogPost.all
  end

  # ---3) find blogpost with specidfed ID
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) create a new blogpost 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) create a blogpost and makes sure it has the right parameters
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) edit blogpost with specified ID
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update a post and make sure it has the parameters required.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) delete blogpost specified with ID
      redirect_to blog_posts_path
    end
  end

  # ---9) 
  private
  def blog_post_params
    # ---10)permit people to type in these parameters, private make sure that only it is being used. 
    params.require(:blog_post).permit(:title, :content)
  end
end
