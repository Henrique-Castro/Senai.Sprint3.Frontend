using Microsoft.AspNetCore.Mvc;
using Senai.Sstop.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Sstop.WebApi.Repositories
{
    public class EstiloRepository
    {
        
        private string StringConexao = "Data Source=. \\SqlExpress;Initial Catalog=T_SStop;User Id=sa;Pwd=132;";
        public List<EstiloDomain> Listar()
        {
            List<EstiloDomain> listaEstilos = new List<EstiloDomain>();

            using(SqlConnection con = new SqlConnection(StringConexao))
            {
                string query = "SELECT IdEstiloMusical,Nome FROM EstilosMusicais";
                con.Open();
                SqlDataReader sdr;

                using(SqlCommand cmd = new SqlCommand(query, con))
                {
                    //Executa o comando e armazena dentro da variável sdr
                    sdr = cmd.ExecuteReader();
                    while (sdr.Read())
                    {
                        EstiloDomain estilo = new EstiloDomain {
                            IdEstilo = Convert.ToInt32(sdr["IdEstiloMusical"]),
                            Nome = sdr["Nome"].ToString()
                        };
                        listaEstilos.Add(estilo);
                    }
                }
            }
            
            return listaEstilos;
        }
    }
}
