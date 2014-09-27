Rails.application.routes.draw do

  post 'sessions/create'
  get 'sessions/get_session'

  post 'sessions/destroy'

  root to: 'application#index'

  namespace :api, defaults: {format: :json} do 
    resources :posts do 
    	resources :comments, only: [:index, :create, :destroy]
    end
    
    resources :votes, only: [:create, :index]
    post 'votes/:id/destroy', to: 'votes#unvote', as: 'unvote'
  end

end
