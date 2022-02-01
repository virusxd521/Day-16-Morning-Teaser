export class ProgressBar {
  constructor(value, gradient) {
    this.value = value;
    this.gradient = gradient;
    //@TODO no.4 make it possible to create progress bar with any default value and gradient. these values should be passed to constructor




    //@TODO no.5 make it possible to create progress bar with any maximum value. once using maximum value, make sure the width of knob element is calculated correctly

    this.element = document.createElement('div');
    this.refreshElement();
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/10
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width: ${this.value * 10}%" class="knob"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;
    
    const plusBtn = this.element.querySelector('.btn-plus');
    plusBtn.addEventListener('click', () => {
      this.value = Math.min(10, this.value + this.gradient);
      this.refreshElement();
    });

    const minusBtn = this.element.querySelector('.btn-minus');
    minusBtn.addEventListener("click" , ()=> {
      if(this.value > 0){
        this.value -= 1;
         this.refreshElement();
      }
    });



    
  }
}
