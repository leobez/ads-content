/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package estacionamento;

import java.util.Objects;

/**
 *
 * @author 0040482121003
 */
public class Carro {
    
    private String  placa, modelo, nomeVendedor;
    private int     anoFabricacao;
    private boolean disponivel;
    
    // GETTERS E SETTERS
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public int getAnoFabricacao() {
        return anoFabricacao;
    }
    public void setAnoFabricacao(int anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }

    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    
    public String getNomeVendedor() {
        return nomeVendedor;
    }

    // CONSTRUTOR
    public Carro(String placa, int anoFabricacao, String modelo) {
        this.placa = placa;
        this.anoFabricacao = anoFabricacao;
        this.modelo = modelo;
        disponivel = true;
        nomeVendedor = "";
    }
    
    // MÉTODOS
    public boolean disponivel() {
        return disponivel; 
    }
    
    public void imprimeDados() {
        System.out.println("Placa: " + placa);
        System.out.println("Ano de fabricação: " + anoFabricacao);
        System.out.println("Modelo: " + modelo);
        System.out.println("Disponivel: " + (disponivel() ? "Sim" : "Não"));      
        // Irá imprimir nada caso o carro não tenha sido vendido
        System.out.println("Nome do vendedor: " + nomeVendedor);
    }
    
    // Criar sem nada pois será sobreescrito nas classes descendentes.
    public boolean oferta (double valor){
        return false;
    }
   
    // O motivo de ter criado o métodos oferta nessa classe é justamente
    // para poder criar esse método.
    public boolean venderCarro(String vendedor, double valorVenda) {
        if (!disponivel) {
            System.out.println("Carro indisponivel" + "\n");
            return false;
        } 
        if (!oferta(valorVenda)) {
            System.out.println("Valor abaixo!" + "\n");
            return false;
        }
     
        disponivel = false;
        nomeVendedor = vendedor;
     
        return true;
    }     

    @Override
    public String toString() {
        return "Carro{" + "placa=" + placa + ", modelo=" + modelo + ", nomeVendedor=" + nomeVendedor + ", anoFabricacao=" + anoFabricacao + ", disponivel=" + disponivel + '}';
    }
    
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + Objects.hashCode(this.placa);
        hash = 71 * hash + Objects.hashCode(this.modelo);
        hash = 71 * hash + Objects.hashCode(this.nomeVendedor);
        hash = 71 * hash + this.anoFabricacao;
        hash = 71 * hash + (this.disponivel ? 1 : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Carro other = (Carro) obj;
        if (this.anoFabricacao != other.anoFabricacao) {
            return false;
        }
        if (this.disponivel != other.disponivel) {
            return false;
        }
        if (!Objects.equals(this.placa, other.placa)) {
            return false;
        }
        if (!Objects.equals(this.modelo, other.modelo)) {
            return false;
        }
        return Objects.equals(this.nomeVendedor, other.nomeVendedor);
    }
}
