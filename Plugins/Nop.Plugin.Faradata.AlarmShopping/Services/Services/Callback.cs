using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;

namespace Nop.Plugin.Faradata.AlarmShopping.Services.Services
{
    public class CallBackUrl
    {
        public static T Post<T, T2>(string url, T2 model)
        {
            try
            {
                #region ارسال پیام و دریافت نتیجه ارسال

                ASCIIEncoding encoder = new ASCIIEncoding();
                String postData = JsonConvert.SerializeObject(model);
                byte[] byteArray = Encoding.UTF8.GetBytes(postData);

                HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
                request.Method = "POST";
                request.KeepAlive = false;
                request.ContentType = "application/json";
                //Request.Headers.Add(string.Format("Authorization: key={0}", serverkey));
                request.ContentLength = byteArray.Length;

                Stream dataStream = request.GetRequestStream();
                dataStream.Write(byteArray, 0, byteArray.Length);
                dataStream.Close();

                HttpWebResponse Response = request.GetResponse() as HttpWebResponse;

                Stream receiveStream = Response.GetResponseStream();

                HttpWebResponse response = (HttpWebResponse)request.GetResponse();

                StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8);

                StreamReader Reader = new StreamReader(Response.GetResponseStream());

                var responseLine = Reader.ReadToEnd();

                var rec = JsonConvert.DeserializeObject<T>(responseLine);

                return rec;
                #endregion

            }
            catch (Exception ee)
            {
                return default(T);
            }
        }

        public static T Get<T>(string url)
        {
            try
            {
                #region ارسال پیام و دریافت نتیجه ارسال
                ASCIIEncoding encoder = new ASCIIEncoding();

                HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
                request.Method = "GET";

                HttpWebResponse Response = request.GetResponse() as HttpWebResponse;
                Stream receiveStream = Response.GetResponseStream();
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();

                StreamReader readStream = new StreamReader(receiveStream, Encoding.UTF8);

                StreamReader Reader = new StreamReader(Response.GetResponseStream());

                var responseLine = Reader.ReadToEnd();

                var rec = JsonConvert.DeserializeObject<T>(responseLine);

                return rec;
                #endregion

            }
            catch (Exception ee)
            {
                return default(T);
            }
        }
    }

}
