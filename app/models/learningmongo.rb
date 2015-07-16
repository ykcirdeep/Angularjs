class Learningmongo
  include Mongoid::Document
  include Mongoid::Timestamps
    field :name,type: :string
    field :winner,type: :boolean
end
