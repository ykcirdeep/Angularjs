class AngularsController < ApplicationController
    respond_to :html, :json
    
    def landing
    end
    
    def index
      respond_with Learningmongo.all
    end
    def show
        respond_with Learningmongo.find(params[:id])
    end
    def create
        params.permit!
        respond_with Learningmongo.create(params[:entry])
    end
    def update
       	params.permit!
        learn= Learningmongo.find(params[:id])
         if learn.update_attributes(params[:entry])
            respond_with "true"
          else
           respond_with "false"
        end
    end
    def destroy
         
      if Learningmongo.find(params[:id]).destroy
       @sata=true
         respond_with @sata
      else
        @sata=false
         respond_with @sata
      end
         
    end
    def test
        render json: ["true"]
      end
    def parms_permit
      params.require(:entry).permit
    end
    
end
