app.filter('camelCase',function(){ 
    return function(name){ 
      if(typeof name !== "string" && name===true)
        {return name="winner";}
      else if (name===false)
        {return name="";}
      var name=name.split("_");
      var camel=[];
      angular.forEach(name,function(name,key){ 
        camel.push(name[0].toUpperCase()+name.substring(1,name.length).toLowerCase());
      });
      return camel.join('');
    }

});