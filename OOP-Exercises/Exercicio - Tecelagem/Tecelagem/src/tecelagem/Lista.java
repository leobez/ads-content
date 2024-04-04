/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public class Lista {
    
    private Funcionario lista[];
    private int contador;

    public Lista(int capacidade_max) {
        lista = new Funcionario[capacidade_max];
        contador = 0;
    }
    
    public void add(Funcionario f) throws ListaLotada {
        if (!array_has_space()) throw new ListaLotada(lista.length);
        lista[contador] = (Funcionario) f;
        contador++;
    }
    
    public void listagemVendas() {
        System.out.println("-- Listando vendedores --");
        for (int a=0; a<contador; a++) {
            if (lista[a] instanceof Vendedor) {
                lista[a].hollerith();
            }
        }
    }
    
    public void listagemProd() {
        System.out.println("-- Listando produtores --");
        for (int a=0; a<contador; a++) {
            if (lista[a] instanceof Produtor) {
                lista[a].hollerith();
            }
        }
    }
    
    public void listagemAdm() {
        System.out.println("-- Listando Administradores --");
        for (int a=0; a<contador; a++) {
            if (lista[a] instanceof Administrador) {
                lista[a].hollerith();
            }
        }
    }

    public boolean registrarVenda(int index, double valor) {
        if (lista[index] instanceof Vendedor) {
            Vendedor temp = (Vendedor) lista[index];
            temp.registrarVenda(valor);
            return true;
        }
        return false;
    }
    
    public boolean registrarFalta(int index) {
        // Administrador
        if (lista[index] instanceof Administrador) {
            Administrador temp = (Administrador) lista[index];
            temp.registrarFalta();
            return true;
        }
        return false;
    }
    
    // Produção
    public boolean registrarHorasNoturnas(int index, int horas) {
        if (lista[index] instanceof Produtor) {
            Produtor temp = (Produtor) lista[index];
            temp.registrarHorasNoturnas(horas);
            return true;
        }
        return false;
    }
    
    public boolean registrarHorasDiurnas(int index, int horas) {
        if (lista[index] instanceof Produtor) {
            Produtor temp = (Produtor) lista[index];
            temp.registrarHorasDiurnas(horas);
            return true;
        }
        return false;
    }

    private boolean test_index(int index) {
        if (index >= contador || index < 0) {
            System.out.println("index out of bounds!");
            return false;
        } 
        return true;
    } 
    
    private boolean array_has_space() {
        if (contador >= lista.length) {
           //System.out.println("Array full!");
           return false;
        }
        return true;
    }
    
}
