function tinh() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let delta = parseFloat(Math.pow(b, 2) - 4 * a * c);
    //   document.write(a+' '+b+' '+c+' '+delta)
    if (delta < 0) {
      document.getElementById("outt").value = "phuong trinh vo nghiem";
    } else if (delta == 0) {
      document.getElementById("outt").value =
        "phuong trinh co nghiem kep : " + -b / (2 * a);
    } else {
      document.getElementById("outt").value =
        "phuong trình có 2 nghiệm : " +
        (-b + Math.sqrt(delta)) / (2 * a) +
        " va " +
        (-b - Math.sqrt(delta) / (2 * a));
    }
  }