window.onload = function() { 
					window.pessoas = []
					window.idades = []
					window.first = 0

					}
				
				
				
				document.getElementById("botao").onclick = function() {createTable(document.getElementById("nome").value, document.getElementById("idade").value, false)}
                                
                function delRow(e){
                    var r = confirm("Deseja apagar esta linha?");
                    if (r == true) {
                        remove = e.innerText
                        remove = remove.split("\t")
                        remove[0] = remove[0].split("\n")
                        
                        window.pessoas.pop(remove[0])
                        window.idades.pop(remove[1])
                        console.log(window.pessoas, window.idades)
                        e.parentNode.parentNode.removeChild(e.parentNode)
                    }
                    
                }
				
				function createTable(nome, idade, edit) {
                        //nome = document.getElementById("nome").value
                       //idade = document.getElementById("idade").value
                    
                        
						if (window.pessoas.indexOf(nome) == -1 || window.idades.indexOf(idade) == -1) {
                            if (edit && e == event){
                                index = document.getElementById("inputN").value
                                window.pessoas.splice(index, 1, nome)
                                window.idades.splice(index, 1, idade)
                            }else{
                                window.pessoas.push(nome)
                                window.idades.push(idade)
                            }
							//sortName(window.pessoas, window.idades)

							insertDOM(nome, idade)
						} else{
							window.alert("Nome já existe :(")
						}
						document.getElementById("nome").value = ""
                        document.getElementById("idade").value = ""
						
						document.querySelectorAll('.btnDel').forEach(item => {
                            item.addEventListener('click', event => {
                               delRow(item)
                            })
                        })
                        
                        document.querySelectorAll('.btnEdit').forEach(item => {
                            item.addEventListener('click', event => {
                               editRow(item)
                            })
                        })
				}
				
				function editRow(e){
                    console.log(e.parentNode.childNodes)
                    idade = e.previousElementSibling.previousElementSibling
                    nome = e.previousElementSibling.previousElementSibling.previousElementSibling
                    
                    
                    if (e.parentNode.lastChild.tagName != "DIV"){
                        e.parentNode.childNodes.forEach(tag => tag.style.visibility='hidden')
                       e.parentNode.id = "apagar"
                        
                        var div    = document.createElement("div")
                        var tdN = document.createElement("td")
                        var tdI  = document.createElement("td")
                        var ok  =  document.createElement("button")
                        
                        var inputN =  document.createElement("input")
                        var inputI  =  document.createElement("input")
                        inputN.setAttribute("type", "text")
                        inputI.setAttribute("type", "text")
                        div.style.visibility="visible"

                        window.e = e
                        ok.id      = "ok" 
                        div.id = "div"
                        tdN.id = "tdN"
                        tdI.id = "tdI"
                        inputN.id = "inputN"
                        inputI.id = "inputI"
                        
                        inputN.value = nome.textContent
                        inputI.value = idade.textContent
                        ok.innerHTML = "OK"
    
                        
                        e.parentNode.appendChild(div)
                        document.getElementById("div").appendChild(tdN)
                        document.getElementById("tdN").appendChild(inputN)
                        console.log("input")
                        document.getElementById("div").appendChild(tdI)
                        document.getElementById("tdI").appendChild(inputI)
                        document.getElementById("tdI").appendChild(ok)
                        
                        
                        ok.addEventListener('click', event => {
                                Submit(inputN.value, inputI.value, ok, e)
                                })
                    }
                    
                }
				
				function Submit(nome, idade, ok, e){
                    delTbody()

                    createTable(nome, idade, true, e)
                    document.getElementById("div").remove()
                    document.getElementById("apagar").remove()
                }
                
                function delTbody(){
                    body = document.getElementById("tbody")
                    
                    removeEventListener("click", document.querySelectorAll(".btnEdit"))
                    removeEventListener("click", document.querySelectorAll(".btnDel"))
                    removeEventListener("click", ok)
                }
                
                
				function sortName(pessoas, idades){
                    for(i = 0; i < pessoas.length; i++){
                        for(j = 0; j < pessoas.length; j++){
                            if (pessoas[i] > pessoas[j]){
                                    p= pessoas[j]
                                    pessoas[j] = pessoas[i]
                                    pessoas[i] = p
                                    
                                    i = idades[j]
                                    idade[j] = idade[i]
                                    idade[i] = i
                            }
                        }
                    }
				}
				
				function insertDOM(nome, idade){
					if (first == 0){
							var thN = document.createElement("th")
							var thI = document.createElement("th")
							
							thN.innerHTML = "Nome"
							thI.innerHTML = "Idade"
							
							document.getElementById("thead").appendChild(thN)
							document.getElementById("thead").appendChild(thI)
							window.first = 1
						}
						var tr = document.createElement("tr")
						var tdN = document.createElement("td")
						var tdI = document.createElement("td")
						var cancel =  document.createElement("button")
                        var edit =  document.createElement("button")
						
						tdN.innerHTML = nome
						tdI.innerHTML = idade
						cancel.innerHTML = "Apagar"
                        edit.innerHTML = "Editar"
						cancel.classList.add("btnDel")
                        edit.classList.add("btnEdit")
                        tr.id = "tr"
                        						
						document.getElementById("tbody").appendChild(tr)
                                                
						document.getElementById("tr").appendChild(tdN)
						document.getElementById("tr").appendChild(tdI)
						document.getElementById("tr").appendChild(cancel)
                        document.getElementById("tr").appendChild(edit)
                        tr.id = ""
				}
				
