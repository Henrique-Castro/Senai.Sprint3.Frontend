using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Sstop.WebApi.Domains;
using Senai.Sstop.WebApi.Repositories;

namespace Senai.Sstop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class EstilosController : ControllerBase
    {
        List<EstiloDomain> listaDeEstilos = new List<EstiloDomain>();
        EstiloRepository repositorio = new EstiloRepository(); 
        [HttpGet]
        //Enumerable interage com listas/coleções de forma simples Select, por exemplo
        

        

        [HttpGet]
        public IEnumerable<EstiloDomain> ListarTodos()
        {
            return repositorio.Listar();
        }
    }
}