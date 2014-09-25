Rails.application.routes.draw do

  post 'sessions/create'
  get 'sessions/get_session'

  post 'sessions/destroy'

  root to: 'application#index'

  namespace :api, defaults: {format: :json} do 
    resources :posts
    resources :votes, only: [:create, :index]
    post 'votes/:id', to: 'votes#unvote', as: 'unvote'
  end

end
