/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package corridakart;

/**
 *
 * @author leosb
 */

public class Equipe {
    
    private int numero_da_equipe, classificacao_pos_corrida;
    private String nome_da_equipe, nome_do_piloto;

    public int getNumero_da_equipe() {
        return numero_da_equipe;
    }

    public void setNumero_da_equipe(int numero_da_equipe) {
        this.numero_da_equipe = numero_da_equipe;
    }

    public int getClassificacao_pos_corrida() {
        return classificacao_pos_corrida;
    }

    public void setClassificacao_pos_corrida(int classificacao_pos_corrida) {
        this.classificacao_pos_corrida = classificacao_pos_corrida;
    }

    public String getNome_da_equipe() {
        return nome_da_equipe;
    }

    public void setNome_da_equipe(String nome_da_equipe) {
        this.nome_da_equipe = nome_da_equipe;
    }

    public String getNome_do_piloto() {
        return nome_do_piloto;
    }

    public void setNome_do_piloto(String nome_do_piloto) {
        this.nome_do_piloto = nome_do_piloto;
    }


    public Equipe(int numero_da_equipe, String nome_da_equipe, String nome_do_piloto) {
        this.numero_da_equipe = numero_da_equipe;
        this.nome_da_equipe = nome_da_equipe;
        this.nome_do_piloto = nome_do_piloto;
        classificacao_pos_corrida = -1;
    }
    
    public void ListarEquipe() {
        System.out.println("Numero da eqipe: " + numero_da_equipe);
        System.out.println("Nome da equipe: " + nome_da_equipe);
        System.out.println("Nome do piloto: " + nome_do_piloto);
        if (classificacao_pos_corrida == -1) {
            System.out.println("Classificacao na prova: desclassificado");
        } else {
            System.out.println("Classificacao na prova: " + classificacao_pos_corrida);
        }
        System.out.println("");
    }
    
    
    
}
