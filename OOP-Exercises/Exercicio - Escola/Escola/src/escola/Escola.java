/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package escola;

/**
 *
 * @author 0040482121003
 */
public class Escola {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       
        Regular aluno_regular1 = new Regular("0040482121003", "Leonardo");
        aluno_regular1.historico();
        aluno_regular1.registrarFaltas(15);
        aluno_regular1.abonarFaltas(3);
        aluno_regular1.registrarNotas(6, 6);
        aluno_regular1.historico();
        
        Assistente aluno_assistente1 = new Assistente("11111111-11", "José");
        aluno_assistente1.historico();
        aluno_assistente1.receberResumo();
        aluno_assistente1.registrarFaltas(15);
        aluno_assistente1.historico();
        
        // ARRAY
        Lista lista_alunos = new Lista(10);
        
        lista_alunos.add(aluno_regular1);
        lista_alunos.add(aluno_assistente1);
        
        lista_alunos.listagemRegular();
        lista_alunos.listagemAssistente();   

    }
    
}
