/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package escola;

/**
 *
 * @author 0040482121003
 */
public class Lista {
    private Aluno lista_de_alunos[];
    private int cont;

    public Lista(int max_cap) {
        lista_de_alunos = new Aluno[max_cap];
        cont = 0;
    }
    
    public boolean add(Aluno a) {
        if (!array_has_space()) return false;
        lista_de_alunos[cont] = (Aluno) a;
        cont++;
        return true;
    }
    
    public void listagemRegular() {
        System.out.println("-- Listando Alunos Regulares --");
        for (int a=0; a<cont; a++) {
            if (lista_de_alunos[a] instanceof Regular) {
                lista_de_alunos[a].historico();
            }
        }
    }
    
    public void listagemAssistente() {
        System.out.println("-- Listando Alunos Assistentes --");
        for (int a=0; a<cont; a++) {
            if (lista_de_alunos[a] instanceof Assistente) {
                lista_de_alunos[a].historico();
            }
        }
    }
    
    private boolean test_index(int index) {
        if (index >= cont || index < 0) {
            System.out.println("index out of bounds!");
            return false;
        } 
        return true;
    } 
    
    private boolean array_has_space() {
        if (cont >= lista_de_alunos.length) {
            System.out.println("Array full!");
           return false;
        }
        return true;
    }
    
}
