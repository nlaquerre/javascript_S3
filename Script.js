	//const AWSForm_1 = document.getElementById("car_submission_form")
	var s3Done = false;
	//const video_1 = document.getElementById("video_input_1")

	document.getElementById("car_submission_form").addEventListener("submit", async event => {
		/* LOG */console.log(s3Done)
		let submitButton = document.getElementById("car_submission_form").querySelector("#wpforms-edit-entry-update");
		if(s3Done == false){
			event.preventDefault()
			//event.stopPropagation()
			const file = document.getElementById("video_input_1").files[0]
			/* LOG */console.log(file.size)
            
			//if(file.size > 321266294 ) {
			if(file.size > 415266294 ) {
				alert("Video size is over 400 megs!");
				//alert("Video size is over 300 megs!");
				location.reload();
			}

            if(file.size > 100) {
                // get secure url from our server
                const { video1_url } = await fetch("https://s3storage.qrautoshowboards.com/s3url").then(res => res.json())
                /* LOG */console.log(video1_url)
                const video1_2ndUrl = video1_url.split('?')[0]
                /* LOG */console.log(video1_2ndUrl)
                await fetch(video1_url, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "multipart/form-data"
                    },
                    body: file

                })
            }

			s3Done = true;
			//await document.getElementById("video_input_1").files[0] = null;
			/* LOG */console.log(s3Done);
			document.getElementById("car_submission_form").requestSubmit(submitButton);
			//sleep(500).then(() => { document.getElementById("car_submission_form").submit(); });
		}
	})
