require 'test_helper'

class AngularsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
