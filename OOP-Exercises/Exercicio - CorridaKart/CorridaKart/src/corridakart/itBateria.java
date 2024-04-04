/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package corridakart;

/**
 *
 * @author leosb
 */
public interface itBateria {
    
    // ATRIBUTOS: PUBLICO, ESTATICO E FINAL.
    Equipe lista_de_equipes[] = new Equipe[10];
    
    // MÉTODOS: ABSTRATOS E PUBLICOS
    void inscreverEquipe(int NumeroEquipe, String Nome, String Piloto) throws ExNumMaximoEquipes;
   
    int buscarEquipe(int NumeroEquipe);
    
    void desclassificar(int index) throws Exception;
    
    void classificar(int index, int posicao) throws Exception;
    
    void listarEquipes(); 
}
