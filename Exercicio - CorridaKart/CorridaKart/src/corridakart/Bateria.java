/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corridakart;

/**
 *
 * @author leosb
 */
public class Bateria implements itBateria {
    
    // ATRIBUTOS
    private String categoria;
    private int numero_bateria, numero_de_equipes, numero_equipe_vencedora;

    // CONSTRUTOR
    public Bateria(String categoria, int numero_bateria) {
        this.categoria = categoria;
        this.numero_bateria = numero_bateria;
        
        numero_de_equipes = 0;
        numero_equipe_vencedora = -1;
    }
   
    // MÉTODOS
    @Override
    public void inscreverEquipe(int NumeroEquipe, String Nome, String Piloto) throws ExNumMaximoEquipes {
        if (numbero_de_equipes_atingiu_maximo()) throw new ExNumMaximoEquipes(10); 
        
        Equipe e = new Equipe(NumeroEquipe, Nome, Piloto);
        e.setClassificacao_pos_corrida(0);
        
        lista_de_equipes[numero_de_equipes] = e;
        numero_de_equipes++;
    }
    
    @Override  
    public int buscarEquipe(int NumeroEquipe) {
        for (int a=0; a < numero_de_equipes; a++) {
            if (lista_de_equipes[a].getNumero_da_equipe() == NumeroEquipe) {
                return a;
            }
        }
        return -1;
    }
    
    @Override 
    public void desclassificar(int index) throws Exception {
        if (!index_e_valido(index)) throw new Exception();
        lista_de_equipes[index].setClassificacao_pos_corrida(-1);
    }
    
    @Override
    public void classificar(int index, int posicao) throws Exception {
        if (!index_e_valido(index)) throw new Exception();
        
        if (posicao >= 1 && posicao <= numero_de_equipes) {
            lista_de_equipes[index].setClassificacao_pos_corrida(posicao);
            if (posicao == 1) {
                numero_equipe_vencedora = lista_de_equipes[index].getNumero_da_equipe();
            }
        }
    }
    
    @Override
    public void listarEquipes() {
        System.out.println("Numero da equipe vencedora: " + numero_equipe_vencedora);
        System.out.println("");
        for (int a=0; a<numero_de_equipes; a++) {
            lista_de_equipes[a].ListarEquipe();
        }
    }
    
    // MÉTODOS PRIVADOS
    private boolean numbero_de_equipes_atingiu_maximo() {
        return numero_de_equipes >= 10;
    }
    
    private boolean index_e_valido(int index) {
        return (index >= 0 && index < numero_de_equipes);
    }
}
