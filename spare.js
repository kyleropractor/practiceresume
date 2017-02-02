        var i = 0;
        for(i;i < 10;i++) {
        var formattedImage = HTMLprojectImage.replace(data, project.images[i]);
        $(".project-entry:last").append(formattedImage);
              if (project.images[i].length < 0) { break; };
      };
