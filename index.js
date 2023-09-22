  setInterval(time, 1000)

  let hourhand = document.getElementById("hourhand")
  let minutehand = document.getElementById("minutehand")
  let secondhand = document.getElementById("secondhand")

    function time() {
        let currenttime = new Date()

        let secondratio = currenttime.getSeconds() / 60
        let minuteratio = (secondratio + currenttime.getMinutes()) / 60
        let hourratio = (minuteratio + currenttime.getHours()) / 12

        rotate(hourhand, hourratio)
        rotate(minutehand, minuteratio)
        rotate(secondhand, secondratio)
    }

        function rotate(element, rotationdeg) {
             element.style.setProperty("--rotation", rotationdeg * 360 )
        }