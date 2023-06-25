/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package autopecas;

/**
 *
 * @author leosb
 */
public class Lista {
    
    // ATRIBUTOS
    private Peca lista[];
    private int cont;
    
    // CONSTRUTOR
    public Lista (int lista_max_size) {
        lista = new Peca[lista_max_size];
        cont = 0;
    }
    
    // MÉTODOS
    public int adicionarPeca(Peca pc) throws Exception{
        if (!array_has_space()) throw new Exception();
        lista[cont] = pc;
        cont++;
        return cont-1;
    }
    
    public void retirarUnidades(int index, int qtd) throws IndexInvalido, Exception{   
        if (!is_index_valid(index)) throw new IndexInvalido(lista.length);
        if (!has_enough_qtd_estoque(index, qtd)) throw new Exception();
        
        int qtd_atual = lista[index].getQtd_estoque();
        lista[index].setQtd_estoque(qtd_atual - qtd);
    }
    
    public void acrescentarUnidades(int index, int qtd) throws IndexInvalido{
        if (!is_index_valid(index)) throw new IndexInvalido(lista.length);
        
        int qtd_atual = lista[index].getQtd_estoque();
        lista[index].setQtd_estoque(qtd_atual + qtd); 
    }
    
    public void imprimirPeca(int index) throws IndexInvalido{
        if (!is_index_valid(index)) throw new IndexInvalido(lista.length);
        
        lista[index].imprimirPeca();    
    }
    
    public void relatorioGeral() {
        for (int a=0; a<cont; a++) {
            lista[a].imprimirPeca();
        }
    }
    
    public void relatorioReposicao(int qtd_minima) {
        for (int a=0; a<cont; a++) {
            if (lista[a].getQtd_estoque() <= qtd_minima) {
                lista[a].imprimirPeca();
            }
        }
    }
    
    // MÉTODOS PRIVADOS 
    private boolean array_has_space() {
        return ( cont < lista.length );
    }
    
    private boolean is_index_valid(int index)  {
        return index >= 0 && index < cont;
    }
    
    private boolean has_enough_qtd_estoque(int index, int qtd) {
        return (lista[index].getQtd_estoque() >= qtd);
    }
}
