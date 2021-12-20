function Calculator(){
    this.display = document.querySelector('.display')
    this.btn =  document.querySelectorAll('.btn')

    this.init = ()=>{
        this.show()
        this.calc()
        this.clearDisplay()
        this.deleted()
        this.pressEnter()
    }

    this.show= ()=>{
        this.btn.forEach(btn => btn.addEventListener('click', ()=>{
            if(btn.classList.contains('btn-num')) this.display.value += btn.innerText

            if(btn.classList.contains('btn-equal')) this.calc()
            
            if(btn.classList.contains('btn-del')) this.deleted()

            if(btn.classList.contains('btn-clear')) this.clearDisplay()
        }))
    }

    this.calc = ()=>{
        const result = eval(this.display.value)  
        this.display.value = result

        if(result == Infinity) this.display.value = 'Impossovel dividir por zero'  
    }

    this.clearDisplay = ()=> this.display.value = ''

   this.deleted = ()=>{
        const str = this.display.value.slice(0, -1)
        this.display.value = str
    }

    this.pressEnter = ()=>{
        document.addEventListener('keypress', (e)=>{
            if(e.keyCode === 13) this.calc()
        })
    }
}

const calculadora = new Calculator()

calculadora.init()
